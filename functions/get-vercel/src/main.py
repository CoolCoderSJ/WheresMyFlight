import os, requests


def main(context):
    
    r = requests.get('https://api.vercel.com/v6/deployments?app=wheres-my-flight&since=1704085200000&limit=10', headers={
        "Authorization": f"Bearer {os.environ['VERCEL_TOKEN']}"
    }).json()

    context.log(r)

    dId = r['deployments'][0]['uid']
    context.log(dId)

    return context.res.send(dId)
