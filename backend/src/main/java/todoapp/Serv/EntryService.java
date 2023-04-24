package todoapp.Serv;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import todoapp.Entries.Entries;
import todoapp.Repo.EntryRepo;

@Service
public class EntryService {
	 @Autowired
	 EntryRepo er;
	 
	 public void addData(Entries  en) {
		 er.save(en);
	 }
	 
	 public List<Entries> getEntries(){
		  return er.findAll();
	 }
	 
	 public void updateEntries(String ele,Entries en) {
		  Entries element=er.getByValue(ele);
		  element.setValueType(en.getValueType());
		  er.save(element); 
	 }
	 
	 public void deleteEntry(String value) {
		er.deleteByValue(value);
	 }

}
