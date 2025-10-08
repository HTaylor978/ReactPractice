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


@app.route('/api/edit-json', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type'])
def edit_todo():
    try:
        updated_data = request.get_json()
        todo_id = updated_data.get('_id')

        if not todo_id:
            return jsonify({'error': 'No ID provided'}), 400

        # Read existing data
        with open(DATA_FILE, 'r') as f:
            data = json.load(f)

        # Find and update the specific ToDo item
        for i, todo in enumerate(data):
            if todo.get('_id') == todo_id:
                data[i] = updated_data
                break
        else:
            if updated_data in data:
                return jsonify({'message': 'Data already exists'}), 200
            else:
                data.append(updated_data)


        # Write updated data
        with open(DATA_FILE, 'w') as f:
            json.dump(data, f, indent=2)

        return jsonify({'message': 'Data updated successfully'}), 200

    except Exception as e:
        print("Error editing JSON:", e)
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5001)