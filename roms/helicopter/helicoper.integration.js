import {DisassembleRomBytes, DisassembleBytes, findAllJumpInstructions, reduceBytesToDisassembleIntoInstructionGroupData} from '../../disassembler/disassemblerMain';
import * as assert from 'assert';
import {describe, it, before, beforeEach} from 'mocha';
import * as fs from 'fs';
import {expect, use} from 'chai';
import chaiJestSnapshot from 'chai-jest-snapshot';

use(chaiJestSnapshot);

before(function () {
  chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(function () {
  chaiJestSnapshot.configureUsingMochaContext(this);
});

describe('Integration tests for Helicoper.js', function () {
  it('should generate assembly output for helicopter.gb', function () {
    var romData = fs.readFileSync('./roms/helicopter/helicopter.gb');
    const resultingAssembly = DisassembleBytes(romData);
    expect(resultingAssembly).to.matchSnapshot();
  });
});
