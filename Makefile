IMAGES         = $(wildcard images/*)
LIB            = $(wildcard lib/*.*)
CORE           = $(wildcard lib/core/*)
CORE_FIREFOX   = $(addprefix Firefox/data/,$(CORE))
IMAGES_FIREFOX = $(addprefix Firefox/data/,$(IMAGES))
LIB_FIREFOX    = $(addprefix Firefox/data/,$(LIB))
DEP_XPI        = $(LIB_FIREFOX) $(IMAGES_FIREFOX) $(CORE_FIREFOX)
DEPS           = $(DEP_XPI)

install: $(DEP_XPI)
	cd Firefox && jpm post --post-url http://localhost:8888
.PHONY : install

# Run extension in fresh instance of Firefox
run: $(DEP_XPI)
	cd Firefox && jpm run --prefs jpm-prefs.json
.PHONY : run

# Builds the Firefox extension into an installable .xpi file
xpi: $(DEP_XPI)
	cd Firefox && jpm xpi
.PHONY : xpi

# Copies all shared libraries/images to the browser folders
deps: $(IMAGES_FIREFOX) $(LIB_FIREFOX) $(CORE_FIREFOX)
.PHONY : deps

Firefox/data/lib/core/%:lib/core/%
	cp -f $< Firefox/data/lib/core

Firefox/data/lib/%:lib/%
	cp -f $< Firefox/data/lib/

Firefox/data/images/%:images/%
	cp -f $< Firefox/data/images/

clean:
	rm -f $(DEPS)
.PHONY : clean

help:
	@echo "Targets:"
	@echo " -> all [default]"
	@echo " -> xpi"
	@echo " -> run"
	@echo " -> install"
	@echo " -> deps"
.PHONY : help
