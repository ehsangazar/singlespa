#!/bin/bash

# Define the range of ports to check
START_PORT=9000
END_PORT=9010

# Function to kill processes on a given port
kill_process_on_port() {
  local port=$1
  local pid
  pid=$(lsof -t -i:"$port")
  if [ -n "$pid" ]; then
    echo "Killing process $pid on port $port..."
    kill -9 "$pid"
  else
    echo "No process found on port $port."
  fi
}

# Kill processes on ports in the specified range
for port in $(seq $START_PORT $END_PORT); do
  kill_process_on_port "$port"
done

# Define an array of directories
directories=("root-config" "styleguide" "navbar" "utilities" "procurement")

# Loop over each directory to install dependencies and then start the service
for dir in "${directories[@]}"; do
  (
    cd "$dir" || exit
    
    echo "Installing dependencies in $dir..."
    pnpm install
    
    echo "Starting pnpm in $dir..."
    pnpm start &
  )
done

# Wait for all background processes to finish
wait

echo "All pnpm processes have been started."

# Print a message to visit the localhost URL
echo "Visit http://localhost:9000 to view the application."

