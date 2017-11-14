# GameboyDisassembler
Gameboy Disassembler - Convert assembled code back into Z80 assembly code

# Running
```bash
npm install
npm run test
npm run integration
```

# Publishing
```
npm run build && npm publish
```

## TODO
* Handle load instructions for Bank changing (use python script to generate to to/from registers for each instruction)
* Create assembler of the form:
```
const function0x000 = new CodeBlock()
                          .nop()
                          .jmp(0x100)
                          .nop(50)
                          .call(function0x200)
```