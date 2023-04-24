package todoapp.Runner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import todoapp.Entries.Entries;
import todoapp.Serv.EntryService;

@RestController
@RequestMapping("/todo")
@CrossOrigin
public class MyRunner {
	@Autowired 
	EntryService es;
	
	@PostMapping("/add")
	public String addData(@RequestBody Entries en) {
		es.addData(en);
		return en.getValue()+" added succesfully";
	} 
	
	@GetMapping("/get")
	public List<Entries> getEntry(){
		return es.getEntries();
	}
	
	@PutMapping("/update/{ele}")
	public String updateType(@PathVariable String ele,@RequestBody Entries en) {
		es.updateEntries( ele,en);
		return "updated Succesfully";
	}
	
	@DeleteMapping("/delete/{value}")
	public void deleteData(@PathVariable String value) {
		es.deleteEntry(value);
	}

}
