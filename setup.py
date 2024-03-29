# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in multidiscount/__init__.py
from multidiscount import __version__ as version

setup(
	name='multidiscount',
	version=version,
	description='App for multi level discount',
	author='Ridhosribumi',
	author_email='develop@ridhosribumi.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
