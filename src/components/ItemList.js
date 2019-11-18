import React from 'react';

const ItemList = ({projects}) => {
    return (
        <div className='item-list'>
            <div className='item'>
                <h1>Simple Sample</h1>

                <p>Aplikacja pomagająca wypełniać bazę danych SQL testowymi danymi. Po podaniu struktury tabeli w
                    postaci nazwy tabeli, nazw kolumn, typów kolun oraz potrzebnej liczby wierszy do wygenerowania
                    użytkownik otrzymuje zapytanie INSERT, które wystarczy zaaplikować do swojej bazy danych.</p>

                <p>Projekt został stworzony przy użyciu języka Java. Komunikacja została zapewniona poprzez REST api.
                    Głównym endpoint'em dla użytkownika jest
                    '/processTable', który pryjmuje w ciele apytania strukturę tabeli oraz zwraca porządane
                    zapytanie. W celu utrwalenia przykładowych danych została wykorzystana baza danych NoSQL
                    MongoDB.</p>

                <p>Biblioteki wykorzystane w tym projekcie to:
                    <ul>
                        <li>Spring wraz z modułami: Core, Rest, Data oraz Spring Boot</li>
                        <li>Lombok</li>
                        <li>Apache Commons</li>
                        <li>Swagger</li>
                        <li>JUnit</li>
                        <li>Jackson</li>
                    </ul>
                </p>

                <p>Start serwera może się odbyć z dwoma głównymi profilami:
                    <ul>
                        <li>dev - dostarcza wszystkich niezbędych zależności do poprawnego generowania zapytań SQL</li>
                        <li>data-init - ładuje przykładowe dane (np. imiona, miasta) do bazy, z którą komunikuje się
                            aplikacja serwerowa. Dane do załadowania są wcześniej przygotowane w postaci plików
                            tekstowy. Utrwalenie tych danych zostało zaimplementowane przy użyciu Spring’owych
                            auto-repozytorów, które
                            dostarczają podstawowe operacje CRUD.

                        </li>
                    </ul>
                </p>

                <p>
                    Na podstawie zbudowanej paczki jar został stworzony obraz Docker. W celu sprawniejszego
                    budowania obrazu w trakcie rozwijania aplikacji został użyty Dockerfile Maven plugin. Do poprawnego
                    aplikacji działania niezbędna jest baza MongoDB, która została dostarczona również poprzez
                    środowisko Docker. Kontener aplikacji i bazy danych zostały skomponowane przy użyciu docker-compose,
                    a następnie wdrożone na platformę Amazon Web Services. Publiczny adres wystawionego api to:
                    <a className='link'
                       href="http://ec2-3-134-94-181.us-east-2.compute.amazonaws.com"> http://ec2-3-134-94-181.us-east-2.compute.amazonaws.com </a>
                    Przykładowe request’y testujące można znależć <a className='link'
                                                                     href='https://github.com/Szczygiel9/SimpleSample/blob/master/request-test/TableProcessingTest.http'>tutaj</a>

                </p>
            </div>

            <div className='item'>
                <h1>Portfolio</h1>
                <p>
                    To jest ten projekt ;)
                    //TODO
                    //TODO
                </p>
            </div>

        </div>
    );
};
export default ItemList;
