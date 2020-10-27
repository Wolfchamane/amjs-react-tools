import renderer from 'react-test-renderer';

export default async content =>
    await renderer.create(content);
