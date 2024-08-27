# WisPerMed Search Engine
WisPerMed is a biomedical search engine designed to improve the accuracy and efficiency of literature retrieval by integrating Levels of Evidence (LoE) and biomedical concepts. This search engine is designed for medical professionals and researchers who require quick and reliable access to high-quality, evidence-based medical publications. This search engine is build ontop of the Medline database similar the pupular PubMed search engine. 

## Features
- Level of Evidence (LoE) Filtering: Automatically classifies biomedical publications into seven distinct levels (1a, 1b, 2a, 2b, 3a, 3b, 4) based on the Oxford Centre for Evidence-Based Medicine framework. Users can filter search results by LoE to quickly identify high-quality evidence.
- Bio-Concepts Highlighting and Filtering: Extracts and highlights bio-concepts (e.g., genes, diseases, chemicals) within search results. Users can filter documents based on these bio-concepts and visualize them in a word cloud format.
- Improved User Interface: An intuitive design that displays LoE levels using a Nutri-Score-like grading system and highlights bio-concepts in different colors for easy scanning and assessment of article relevance.
- Efficient Search: Reduces the number of queries and search time compared to traditional search engines by integrating advanced filtering options and visual aids.

<img src="WisPerMedUserStudy.PNG" alt="graph"/>


## Installation
- Index Medline into Elasticsearch index. 
- Install mongoDB for storing userprofiles 
- run the server using docker ``docker build -t wispermedserver .; docker run wispermedserver``
- run client using docker ``docker build -t wispermedclient .; docker run wispermedclient``
