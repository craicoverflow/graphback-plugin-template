import { Plugin } from '..';
test('a', () => {
    const blankPlugin = new Plugin();
    expect(blankPlugin).toBeDefined();
    expect(blankPlugin.getPluginName()).toBe('MyBlankPlugin');
});
