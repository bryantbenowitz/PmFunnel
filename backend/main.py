import os
import gspread
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime

app = Flask(__name__)
local_frontend_url = "http://localhost:5173"
local_ip_url = "http://10.0.0.181:3000"
pmfunnel = "https://bryantbenowitz.com"
pmfunnel2 = "https://www.bryantbenowitz.com"
pmfunnel3 = "bryantbenowitz.com"
pmfunnel4 = "www.bryantbenowitz.com"
#josh_local_ip = ":3000"

# add josh_local_ip to the list of origins below 
CORS(app, origins=[local_frontend_url, pmfunnel, pmfunnel2, pmfunnel3, pmfunnel4], supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

#d = Db()
load_dotenv()
# Define paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Get the backend folder path
KEY_FILE_PATH = os.path.join(BASE_DIR, "config", "google-credentials.json")  # Path to credentials file

# Setup Google Sheets API
def setup_google_sheets():
    scope = [
        "https://spreadsheets.google.com/feeds",
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive",
    ]
    creds = ServiceAccountCredentials.from_json_keyfile_name(KEY_FILE_PATH, scope)
    client = gspread.authorize(creds)
    return client

# Function to add data to Google Sheets
def insert_into_google_sheets(name, email, phone, company):
    client = setup_google_sheets()
    sheet = client.open("PmFunnel Signup List").sheet1  # Replace with your Google Sheet name

    # Get current date/time
    now = datetime.now()
    date = now.strftime("%Y-%m-%d")
    time = now.strftime("%H:%M:%S")

    # Append data to the next available row
    sheet.append_row([date, time, name, email, phone, company])

import traceback

@app.route("/api/submit", methods=["POST"])
def submit():
    try:
        data = request.json  # Receive JSON data from frontend

        # Extract fields
        name = data.get("name", "")
        email = data.get("email", "")
        phone = data.get("phone", "")
        company = data.get("company", "")

        # Insert into Google Sheets
        insert_into_google_sheets(name, email, phone, company)

        return jsonify({"message": "Form submitted successfully!"}), 200

    except Exception as e:
        print("🔥 ERROR:", str(e))
        traceback.print_exc()  # Prints full error traceback
        return jsonify({"error": str(e)}), 500

