\echo "Delete and recreate vaccine-hub-api db?"
\prompt "return for yes or control-C to cancel > " answer

DROP DATABASE vaccine_hub;
CREATE DATABASE vaccine_hub;
\connect vaccine_hub;

\i vaccine-hub-api-schema.sql