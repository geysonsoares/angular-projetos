import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2019-05-12 para 12/05/2019', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2019-05-12')).toEqual('12/05/2019');
  });
});
