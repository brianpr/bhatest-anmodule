# Libreria de prueba para Angular

## Instalar

```
npm install bhatest-anlib --save
```

Incluir la libreria en el root module para que quede global en toda la app (incluidos los sub-modulos)

```
import { BhatestAnlib } from 'bhatest-anlib';

@NgModule({
  imports: [
    BrowserModule,
    BhatestAnlib,
    ...
  ]
  ...
})
export class AppModule {}
```

Ejemplo de cómo usarlo en un service propio

```
import { BhatestAnlib } from 'bhatest-anlib';

@Injectable()
export class YourService {

  public constructor(private anlib: BhatestAnlib) {}

}
```


## AoT and Universal support

This module supports [AoT pre-compiling](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
and [Universal server-side rendering](https://github.com/angular/universal).

## Changelog

[Changelog available here](https://github.com/brianpr/bhatest-anlib.git/blob/master/CHANGELOG.md).

## Roadmap

-.

## License

MIT
