from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
import os

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

DATA_FILE = "todoData.json"

@app.route('/api/todos')
def get_todos():
    with open(DATA_FILE, 'r') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/api/todos/<int:id>', methods=['GET'])
def get_todo(id):
    with open(DATA_FILE, 'r') as f:
        data = json.load(f)

    for todo in data:
        if todo.get('_id') == id:
            return jsonify(todo)

    return jsonify({'error': 'ToDo not found'}), 404


@app.route('/api/update-json', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type'])
def add_new_todo():
    try:
        new_data = request.get_json()

        # If file doesn't exist yet, create an empty list
        if not os.path.exists(DATA_FILE):
            with open(DATA_FILE, 'w') as f:
                json.dump([], f)

        # Read existing data
        with open(DATA_FILE, 'r') as f:
            data = json.load(f)

        # Append new data
        data.append(new_data)

        # Write updated data
        with open(DATA_FILE, 'w') as f:
            json.dump(data, f, indent=2)

        return jsonify({'message': 'Data written successfully'}), 200

    except Exception as e:
        print("Error updating JSON:", e)
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5001)