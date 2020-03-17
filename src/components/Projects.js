import React from 'react';
import aws from '../resources/aws.jpg'

const Projects = () => {
    return (
        <div className='item-list'>

            <div className='item'>
                <h1>SimpleSample</h1>

                <p>
                    Github: <a className='link' href='https://github.com/Szczygiel9/SimpleSample'>link</a>
                </p>

                <p>Aplikacja pomagająca wypełniać bazę danych SQL testowymi danymi. Po podaniu struktury tabeli w
                    postaci nazwy tabeli, nazw kolumn, typów kolumn, opcjonalnych typów instynktownych
                    oraz potrzebnej liczby wierszy do wygenerowania użytkownik otrzymuje zapytanie INSERT,
                    które wystarczy zaaplikować do swojej bazy danych.</p>

                <p>Projekt został stworzony przy użyciu języka Java. Komunikacja została zapewniona poprzez REST api.
                    Głównym endpoint'em dla użytkownika jest '/processTable', który przyjmuje w ciele zapytania
                    strukturę
                    tabeli oraz zwraca pożądany kod SQL. Poza typem kolumny możliwe jest podanie typu instynktowego.
                    Jest jedna z wartości predefiniowanych typów, dla których zostanie wczytana wartość ze zbioru
                    przykładowych
                    danych (np. Anna dla typu 'name', Microsoft dla typu 'company).
                    W celu utrwalenia przykładowych danych została wykorzystana baza danych NoSQL
                    MongoDB.</p>

                <div>Biblioteki wykorzystane w tym projekcie to:
                    <div>

                        <ul>
                            <li>Spring wraz z modułami: Core, Rest, Data oraz Spring Boot</li>
                            <li>Lombok</li>
                            <li>Apache Commons</li>
                            <li>Swagger</li>
                            <li>JUnit</li>
                            <li>Jackson</li>
                        </ul>
                    </div>
                </div>

                <p>
                    Start serwera może się odbyć z profilem data-init - ładuje przykładowe dane (np. imiona, miasta)
                    do bazy, z którą komunikuje się aplikacja serwerowa. Dane do załadowania są wcześniej przygotowane
                    w postaci plików tekstowych. Utrwalenie tych danych zostało zaimplementowane przy użyciu
                    Spring’owych
                    auto-repozytorów, które dostarczają podstawowe operacje CRUD.
                </p>

                <p>
                    Gotowa aplikacja została wdrożona na platformę AWS. W celu zbudowania aplikacji oraz jej
                    deploymentu,
                    został użyty serwis AWS CodePipeline wraz z narzędziami CodeBuild oraz CodeDeploy.
                    Każdy wypchnięty commit do repozytorium GitHub wyzwala testy a następnie budowę paczki.
                    Definicja pipeline'a została zawarta w pliku buildspec.yml. Sama aplikacja
                    została wdrożona na serwis ElasticBeanstalk. Istancja aplikacji SimpleSample potrzebuje do działania
                    bazy danych MongoDB. Jej instancja została zainstalowana na wirtualnej maszynie w serwisie EC2,
                    przy użyciu środowiska Docker oraz oficjalnego obrazu MongoDB.
                    Całość tworzy działąjącą strukturę CICD. Architektura została przedstawiona poniżej.
                    <br/>
                    <br/>
                    <img src={aws} className='aws-image' alt="aws img"/>
                    <br/>
                    <br/>

                    Publiczny adres wystawionego API to: <a className='link'
                                                            href="http://simple-sample.us-east-2.elasticbeanstalk.com">link</a>.
                    Testowanie jest również możliwe dzięki narzędziu Swagger, link: <a className='link'
                                                                                       href="http://simple-sample.us-east-2.elasticbeanstalk.com/swagger-ui.html">swagger</a>.
                </p>
            </div>

            <div className='item'>
                <h1>Portfolio</h1>
                <p>
                    Github: <a className='link' href='https://github.com/Szczygiel9/Portfolio'>link</a>
                </p>
                <p>
                    Projekt tworzony w celu nauki JavaScript'u, CSS, React oraz HTML. Jest to statyczna strona
                    internetowa będąca odpowiednikiem CV.
                    <br/>
                    Strona została zaprojektowana z dbałością o czytelność zarówno na urządzeniach o szerokim
                    jak i wąskim ekranie. Do stworzenia nawigacji w górnej belce zostały użyte komponenty z pakietu
                    'react-router-dom'. Sama aplikacja została wdrożona na serwis GitHub Pages.
                </p>
                <div>
                    Do zrobienia:
                    <ul>
                        <li>obsługa przycisku zmiany języka</li>
                        <li>uporządkowanie styli CSS</li>
                        <li>poprawa responsywności oraz stylowaniana na urządzeniach mobilnych</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};
export default Projects;
