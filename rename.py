import os
from os.path import join, getsize
# for root, dirs, files in os.walk('‪P:\repositories\documentation'):
for root, dirs, files in os.walk('‪.'):
    print(root, "consumes", end=" ")
    print(file for file in files)