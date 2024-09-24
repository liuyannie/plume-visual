import requests

url = "http://10.140.32.217:62/prod-api/visapi/DeviceTypeSta/list"

params = {
    "pageNum": 1,
    "pageSize": 10
}

Authorization = "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImIzODNhZWMyLWIzNTAtNDJmNi1hMjkwLTg5YTVmMWRmYTM3MCJ9.oG-aMeIm7qtxSTGZ388JwrHTfcBnuzuIf8_eiSaFc-GY0Z3wZZ2fi3Lu3OX3ZmbIeckszNq-U58ZTL6uFgOWTA"
response = requests.get(url, headers={"Authorization": Authorization}, params=params)
print(response.text)