#!/bin/bash

# Run the required command
ollama run llama2

# Keep the container running
exec "$@"
