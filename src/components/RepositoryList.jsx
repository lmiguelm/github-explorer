export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {[1, 2, 3].map(() => (
          <li>
            <strong>unform</strong>
            <p>Forms in React</p>

            <a href="#">Acessar repositório</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
