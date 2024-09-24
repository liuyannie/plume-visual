import base64
import requests
from PIL import Image
from io import BytesIO

def get_captcha(session, captcha_url):
    response = session.get(captcha_url)
    data = response.json()
    data_url = "data:image/gif;base64," + data["img"]
    data_type, data_base64 = data_url.split(",", 1)
    data_type = data_type.split(";")[0].split("/")[1]
    image_data = base64.b64decode(data_base64)
    image = Image.open(BytesIO(image_data))
    image.save(f"captcha.{data_type}")
    captcha = input("captcha: ")
    uuid = data["uuid"]
    return captcha, uuid

def login(username, password):
    session = requests.Session()
    login_url = "http://10.140.32.217:62/prod-api/login"
    captcha_url = "http://10.140.32.217:62/prod-api/captchaImage"
    captcha, uuid = get_captcha(session, captcha_url)
    login_data = {
        "username": username,
        "password": password,
        "code": captcha,
        "uuid": uuid,
    }
    response = session.post(login_url, json=login_data)
    print(response.text)

if __name__ == "__main__":
    username = input("username: ")
    password = input("password: ")
    login(username, password)