import json
import boto3

s3 = boto3.client('s3')

def handler1(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda1!  ')
    }

def handler2(event, context):
    response = s3.get_object(Bucket='silx-testbucket1', Key='key1')
    content = response(['Body'].read().decode('utf-8'))
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda2!  ')
    }
