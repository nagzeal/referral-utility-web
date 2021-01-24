from block import Block
import datetime


total_number_of_blocks = 10
block_chain = [Block.create_genesis_block()]

print("Block chain has been created...")
print("Hash value is %s" % block_chain[0].hash_value)

for i in range(1, total_number_of_blocks+1):
    block_chain.append(Block(block_chain[i-1].hash_value,
                             "Block number %d" % i,
                             datetime.datetime.now()))
    print("Block number is %d" % i)
    print("Hash values is %s" % block_chain[-1].hash_value)
