'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d0af83f15867420cc33e6e948eaf4a7d62c82c30d44530f711741629ea5191ff9ade8a35323065466ae8d1094ce01e0c352f43a15f041a9bfa9a3ba2545cd376"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d0af83f15867420cc33e6e948eaf4a7d62c82c30d44530f711741629ea5191ff9ade8a35323065466ae8d1094ce01e0c352f43a15f041a9bfa9a3ba2545cd376"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d0af83f15867420cc33e6e948eaf4a7d62c82c30d44530f711741629ea5191ff9ade8a35323065466ae8d1094ce01e0c352f43a15f041a9bfa9a3ba2545cd376"' :
                                            'id="xs-controllers-links-module-AppModule-d0af83f15867420cc33e6e948eaf4a7d62c82c30d44530f711741629ea5191ff9ade8a35323065466ae8d1094ce01e0c352f43a15f041a9bfa9a3ba2545cd376"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d0af83f15867420cc33e6e948eaf4a7d62c82c30d44530f711741629ea5191ff9ade8a35323065466ae8d1094ce01e0c352f43a15f041a9bfa9a3ba2545cd376"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d0af83f15867420cc33e6e948eaf4a7d62c82c30d44530f711741629ea5191ff9ade8a35323065466ae8d1094ce01e0c352f43a15f041a9bfa9a3ba2545cd376"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d0af83f15867420cc33e6e948eaf4a7d62c82c30d44530f711741629ea5191ff9ade8a35323065466ae8d1094ce01e0c352f43a15f041a9bfa9a3ba2545cd376"' :
                                        'id="xs-injectables-links-module-AppModule-d0af83f15867420cc33e6e948eaf4a7d62c82c30d44530f711741629ea5191ff9ade8a35323065466ae8d1094ce01e0c352f43a15f041a9bfa9a3ba2545cd376"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0711557070feb5ad2a19be59b256c3ac5fc36015a9095cb7e0a2172b3bfc014c199f6b395c858f605882e6f1bcfea1194102811b44fbdc70bc13aef7330d93ec"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0711557070feb5ad2a19be59b256c3ac5fc36015a9095cb7e0a2172b3bfc014c199f6b395c858f605882e6f1bcfea1194102811b44fbdc70bc13aef7330d93ec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0711557070feb5ad2a19be59b256c3ac5fc36015a9095cb7e0a2172b3bfc014c199f6b395c858f605882e6f1bcfea1194102811b44fbdc70bc13aef7330d93ec"' :
                                            'id="xs-controllers-links-module-AuthModule-0711557070feb5ad2a19be59b256c3ac5fc36015a9095cb7e0a2172b3bfc014c199f6b395c858f605882e6f1bcfea1194102811b44fbdc70bc13aef7330d93ec"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0711557070feb5ad2a19be59b256c3ac5fc36015a9095cb7e0a2172b3bfc014c199f6b395c858f605882e6f1bcfea1194102811b44fbdc70bc13aef7330d93ec"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0711557070feb5ad2a19be59b256c3ac5fc36015a9095cb7e0a2172b3bfc014c199f6b395c858f605882e6f1bcfea1194102811b44fbdc70bc13aef7330d93ec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0711557070feb5ad2a19be59b256c3ac5fc36015a9095cb7e0a2172b3bfc014c199f6b395c858f605882e6f1bcfea1194102811b44fbdc70bc13aef7330d93ec"' :
                                        'id="xs-injectables-links-module-AuthModule-0711557070feb5ad2a19be59b256c3ac5fc36015a9095cb7e0a2172b3bfc014c199f6b395c858f605882e6f1bcfea1194102811b44fbdc70bc13aef7330d93ec"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-9218d8ff98fb160de26e057e31a9081e7fcbc0e29907b802e991140165917d1e1d7a5e197d4792ad9edeee629b70bd5cbe429ba0c705b261b92e317254d97a3c"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-9218d8ff98fb160de26e057e31a9081e7fcbc0e29907b802e991140165917d1e1d7a5e197d4792ad9edeee629b70bd5cbe429ba0c705b261b92e317254d97a3c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-9218d8ff98fb160de26e057e31a9081e7fcbc0e29907b802e991140165917d1e1d7a5e197d4792ad9edeee629b70bd5cbe429ba0c705b261b92e317254d97a3c"' :
                                            'id="xs-controllers-links-module-PostsModule-9218d8ff98fb160de26e057e31a9081e7fcbc0e29907b802e991140165917d1e1d7a5e197d4792ad9edeee629b70bd5cbe429ba0c705b261b92e317254d97a3c"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-9218d8ff98fb160de26e057e31a9081e7fcbc0e29907b802e991140165917d1e1d7a5e197d4792ad9edeee629b70bd5cbe429ba0c705b261b92e317254d97a3c"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-9218d8ff98fb160de26e057e31a9081e7fcbc0e29907b802e991140165917d1e1d7a5e197d4792ad9edeee629b70bd5cbe429ba0c705b261b92e317254d97a3c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-9218d8ff98fb160de26e057e31a9081e7fcbc0e29907b802e991140165917d1e1d7a5e197d4792ad9edeee629b70bd5cbe429ba0c705b261b92e317254d97a3c"' :
                                        'id="xs-injectables-links-module-PostsModule-9218d8ff98fb160de26e057e31a9081e7fcbc0e29907b802e991140165917d1e1d7a5e197d4792ad9edeee629b70bd5cbe429ba0c705b261b92e317254d97a3c"' }>
                                        <li class="link">
                                            <a href="injectables/PostsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-19a9160b107044b849a07ffff844c0ca375f249a3425297221177b73ad791d2118abece04a44d88a9b49972419487150634a058b3d593a6847225759c5b744c2"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-19a9160b107044b849a07ffff844c0ca375f249a3425297221177b73ad791d2118abece04a44d88a9b49972419487150634a058b3d593a6847225759c5b744c2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-19a9160b107044b849a07ffff844c0ca375f249a3425297221177b73ad791d2118abece04a44d88a9b49972419487150634a058b3d593a6847225759c5b744c2"' :
                                            'id="xs-controllers-links-module-UsersModule-19a9160b107044b849a07ffff844c0ca375f249a3425297221177b73ad791d2118abece04a44d88a9b49972419487150634a058b3d593a6847225759c5b744c2"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-19a9160b107044b849a07ffff844c0ca375f249a3425297221177b73ad791d2118abece04a44d88a9b49972419487150634a058b3d593a6847225759c5b744c2"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-19a9160b107044b849a07ffff844c0ca375f249a3425297221177b73ad791d2118abece04a44d88a9b49972419487150634a058b3d593a6847225759c5b744c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-19a9160b107044b849a07ffff844c0ca375f249a3425297221177b73ad791d2118abece04a44d88a9b49972419487150634a058b3d593a6847225759c5b744c2"' :
                                        'id="xs-injectables-links-module-UsersModule-19a9160b107044b849a07ffff844c0ca375f249a3425297221177b73ad791d2118abece04a44d88a9b49972419487150634a058b3d593a6847225759c5b744c2"' }>
                                        <li class="link">
                                            <a href="injectables/UsersRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseController.html" data-type="entity-link" >BaseController</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseModel.html" data-type="entity-link" >BaseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostModel.html" data-type="entity-link" >PostModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BaseRepository.html" data-type="entity-link" >BaseRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link" >BaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenMiddleware.html" data-type="entity-link" >TokenMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppModuleOptions.html" data-type="entity-link" >AppModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});