
tests:
	truffle test

install-githooks:
	cp ./githooks/pre-commit .git/hooks/
