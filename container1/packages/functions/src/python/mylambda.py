import json

def handler1(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda1!  ')
    }

def handler2(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda2!  ')
    }
