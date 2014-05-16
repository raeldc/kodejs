MOCHA_OPTS= --check-leaks
REPORTER = dot

check: test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--globals setImmediate,clearImmediate \
		$(MOCHA_OPTS)
bench:
	@$(MAKE) -C benchmarks

.PHONY: test bench