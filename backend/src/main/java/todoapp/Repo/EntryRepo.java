package todoapp.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import todoapp.Entries.Entries;
@Repository
public interface EntryRepo extends MongoRepository<Entries, String> {
	public Entries getByValue(@PathVariable String element);
	public Entries deleteByValue(@PathVariable String element);

}
