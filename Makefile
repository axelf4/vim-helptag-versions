all: check

check: difftags
	shellcheck --format=gcc $?

.PHONY: check
