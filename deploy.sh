#!/bin/bash
cd zsportfolio/ || return
git pull origin main
npm ci &&
	npm build &&
	pm2 restart [zackaria-portfolio]
