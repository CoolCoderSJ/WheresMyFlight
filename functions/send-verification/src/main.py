from appwrite.client import Client
from appwrite.services.databases import Databases
import os, requests, random, json


def main(context):
    client = (
        Client()
        .set_endpoint("https://appwrite.shuchir.dev/v1")
        .set_project("wheresmyflight")
        .set_key(os.environ["APPWRITE_KEY"])
    )
    db = Databases(client)

    req = json.loads(context.req.body)
    context.log(req)

    userId = req['userId']

    try:
        code = db.get_document("settings", "phoneVerification", req['userId']+req['phoneNum'])['code']
    except:
        code = str(random.randint(100000, 999999))
        db.create_document("settings", "phoneVerification", req['userId']+req['phoneNum'], {
            "code": code,
            "userId": req['userId'],
            "phoneNum": req['phoneNum']
        },[
            f'read("user:{userId}")', 
            f'write("user:{userId}")'
        ])
        requests.post(f"https://api.contiguity.co/send/text", json={
            "to": "+1"+req['phoneNum'],
            "message": f"Your WheresMyFlight verification code is {code}. Do not share this with anyone."
        }, headers={
            "Authorization": f"Token {os.environ['CONTIGUITY_KEY']}",
            "Content-Type": "application/json"
        })

    context.log(code)

    return context.res.send(code)
