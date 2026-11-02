
from flask import Flask, request, jsonify
from database import get_db_connection

app = Flask(__name__)


@app.route("/api/records", methods=["POST"])
def create_record():
    data = request.get_json()

    if not data or not data.get("description"):
        return jsonify({"error": "Description is required"}), 400

    description = data["description"].strip()

    if not description:
        return jsonify({"error": "Description cannot be empty"}), 400

    connection = get_db_connection()
    cursor = connection.cursor()

    try:
        cursor.execute(
            "INSERT INTO records (description) VALUES (%s)",
            (description,)
        )
        connection.commit()

        return jsonify({
            "message": "Record saved successfully"
        }), 201

    finally:
        cursor.close()
        connection.close()


@app.route("/api/records", methods=["GET"])
def get_records():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)

    try:
        cursor.execute(
            "SELECT id, description, created_at FROM records ORDER BY id DESC"
        )
        records = cursor.fetchall()

        return jsonify(records), 200

    finally:
        cursor.close()
        connection.close()


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
