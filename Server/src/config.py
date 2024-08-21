import os

ELASTICSEARCH_CONFIG = {
    'ELASTIC_HOST': os.environ.get('ELASTIC_HOST'),
    'ELASTIC_PORT': os.environ.get('ELASTIC_PORT'),
    'ELASTIC_USERNAME': 'elastic',
    'ELASTIC_PASSWORD': os.environ.get('ELASTIC_PASSWORD'),
    'INDEX_NAME': 'trec_clinical_trials_21_v2',
    'INDEX_NAME_3': 'medline'
}

READABILITY_LIST = ["easy", "medium", "hard", "expert"]
READABILITY_THRESHOLDS = [20, 15, 10, 0]

BIOCONCEPTS = ['Chemical', 'DNAMutation', 'Disease', 'Gene', 'ProteinMutation', 'SNP', 'Species']

CONNECTION_STRING = os.environ.get("DB")

ALLOW_PAGINATION = os.environ.get('PAGE', 'true').lower() in ('true', 'yes', '1', 't', 'y')

AUTH_CONFIG = {
    "SECRET_KEY": os.environ.get("SECRET_KEY")
}
