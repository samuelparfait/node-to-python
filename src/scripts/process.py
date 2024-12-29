import sys
import json

server_data = sys.stdin.read()
json_data = json.loads(server_data)

numbers = json_data['numbers']

response = {'sum': sum(numbers)}

# Debugging information (to stderr)
print("Debug: Processing input data", file=sys.stderr)

print(json.dumps(response))
