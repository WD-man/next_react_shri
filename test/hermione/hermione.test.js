describe('Правильно отображается контект', () => {
  it('Корневой репозиторий', function() {
    return this.browser.url('/directory?name=test').assertView('plain', '.Directory');
  });

  it('Вложенный репозиторий', function() {
    return this.browser
      .url('/directory?name=test&path=inner_folder')
      .assertView('plain', '.Directory');
  });

  it('Файл', function() {
    return this.browser
      .url('/file?name=test&path=inner_folder$first_inner_file.txt')
      .assertView('plain', '.File');
  });
});

describe('Переходы', () => {
  it('Во вложенную папку', function() {
    return this.browser
      .url('/directory?name=test')
      .assertView('plain', '.Directory')
      .click('a[href="/directory?name=test&path=inner_folder"]')
      .assertView('redirect', '.Directory');
  });

  it('На содержимое файла', function() {
    return this.browser
      .url('/directory?name=test')
      .assertView('plain', '.Directory')
      .click('a[href="/file?name=test&path=first.txt"]')
      .assertView('redirect', '.Directory');
  });

  it('Переход по хлебным крошкам', function() {
    return this.browser
      .url('/file?name=test&path=inner_folder$first_inner_file.txt')
      .assertView('plain', '.File')
      .click('a[href="/directory?name=test&path=inner_folder"]')
      .assertView('redirect', '.File')
      .click('.Repository-BreadCrumbs a[href="/directory?name=test"]')
      .assertView('nextRedirect', '.Directory');
  });
});
