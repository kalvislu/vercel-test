#!/usr/bin/env bash
export EXISTING_VARS=$(printenv | grep 'FRONTEND_' | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,); 
#defined_envs=$(printf '$%s ' $(env | cut -d= -f1))


#cat $FRONTEND_ENV_TMP_FILE | envsubst $EXISTING_VARS > $FRONTEND_ENV_FILE
#envsubst $EXISTING_VARS < $FRONTEND_ENV_TMP_FILE > $FRONTEND_ENV_FILE
envsubst $EXISTING_VARS < $FRONTEND_ENV_FILE > tmp_result && mv tmp_result $FRONTEND_ENV_FILE


#nginx