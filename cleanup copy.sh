#!/bin/bash
cd .
echo "Removing the .next folder..."
rm -rf .next
echo "Removing the node_modules folder..."
rm -rf node_modules
echo "Installing dependencies ..."
npm ci
npm run build
npm start
echo "Cleanup completed successfully."
