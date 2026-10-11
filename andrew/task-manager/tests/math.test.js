const {calcTip, celsToFahr, fahrToCels} = require("../src/math");

test('should calc total with tip', () => {
    const total = calcTip(10, .3);
    expect(total).toBe(13)
})

test('should calc total with default tip', () => {
    const total = calcTip(10);
    expect(total).toBe(12.5)
})

test('should convert 32 F to 0 C', () => {
    const total = fahrToCels(32);
    expect(total).toBe(0)
})

test('should convert 0 C to 32 F', () => {
    const total = celsToFahr(0);
    expect(total).toBe(32)
})