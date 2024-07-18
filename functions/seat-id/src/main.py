from appwrite.client import Client
from appwrite.services.databases import Databases
import os, requests
from datetime import datetime


# This is your Appwrite function
# It's executed each time we get a request
def main(context):
    client = (
        Client()
        .set_endpoint("https://appwrite.shuchir.dev/v1")
        .set_project('wheresmyflight')
        .set_key(os.environ["APPWRITE_API_KEY"])
    )
    db = Databases(client)

    flightId = context.req.body
    context.log(flightId)

    flight = db.get_document("data", "flights", flightId)
    context.log(flight)

    r = requests.get("https://seatmaps.com/auth", headers={"Referer": "https://seatmaps.com"}).json()
    token = r["accessToken"]

    now = datetime.now()

    r = requests.get(f"https://api.seatmaps.com/api/v1/schedule/for/flight/{flight['fullData'][25]}/{flight['fullData'][26]}/{now.strftime('%Y-%m-%d')}", headers={"Authorization": f"Bearer {token}"}).json()
    context.log(r)

    data = r['routes']
    if not data: return context.res.empty()

    context.log("found")
    return context.res.send(data[0]['aircrafts'][0]['planeId'])