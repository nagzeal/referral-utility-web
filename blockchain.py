import hashlib
import datetime


class Block:
    def __init__(self, previous_block_hash, block_data, timestamp):
        self.previous_block_hash = previous_block_hash
        self.block_data = block_data
        self.timestamp = timestamp
        self.hash_value = self.get_hash_value()

    @staticmethod
    def create_genesis_block():

        return Block("0", "0", datetime.datetime.now())

    def get_hash_value(self):
        header_bin = (str(self.previous_block_hash) +
                      str(self.block_data) +
                      str(self.timestamp))
        inner_hash = hashlib.sha256(header_bin.encode()).hexdigest().encode()
        outer_hash = hashlib.sha256(inner_hash).hexdigest()

        return outer_hash
