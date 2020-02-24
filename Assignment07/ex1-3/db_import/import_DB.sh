#!/bin/bash

# make sure to add the bin folder of your Postgres installation to your PATH variable
psql -U postgres -h localhost -f "createDB.sql"
