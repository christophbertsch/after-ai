# init_qdrant.py
from qdrant_client import QdrantClient
from qdrant_client.http import models

qdrant = QdrantClient(host="localhost", port=6333)

qdrant.recreate_collection(
    collection_name="afterai-memory",
    vectors_config=models.VectorParams(
        size=384,
        distance=models.Distance.COSINE
    )
)

print("✅ Qdrant collection initialized.")
