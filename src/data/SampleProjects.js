const simpleSample = {
    title: "Simple sample",
    content: "Simple-sample Springowe moduły i biblioteki: Core, REST, Lombok, Apache Commons... Utrwalenie danych zostało zaimplementowane przy użyciu Spring’owych auto-repozytorów, które dostarczają podstawowe operacje CRUD. Przykładowe dane do generowania wyjściowych zapytań SQL są ładowane z plików tekstowych przy uruchomieniu aplikacji.Ładowanie danych z pliku tekstowegoprofile z data init, mock i devNa podstawie zbudowanej paczki jar został stworzony obraz Docker. W celu sprawniejszego budowania obrazu w trakcie rozwijania aplikacji został użyty Dockerfile Maven plugin. Do poprawnego aplikacji działania niezbędna jest baza MongoDB, która została dostarczona również poprzez środowisko Docker. Kontener aplikacji i bazy danych zostały skomponowane przy użyciu docker-compose, a następnie wdrożone na platformę Amazon Web Services. Publiczny adres wystawionego api to: http://ec2-3-134-94-181.us-east-2.compute.amazonaws.com. Przykładowe request’y testujące można znależć <tutaj"
};

const portfolio = {
    title: "Portfolio",
    content: "Sample content2"
};

const projects = [simpleSample, portfolio];
