package backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import backend.model.CommCategory;
import backend.repository.CommCatRepo;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class MainController {
	private final Logger log = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	CommCatRepo commCatRepo;
	
	@GetMapping("/crud")
	public @ResponseBody Iterable<CommCategory> getAll() {
		// This returns a JSON or XML with the users
		return commCatRepo.findAll();
	}
	
	@PostMapping("/crud")
    ResponseEntity<CommCategory> add(@RequestBody CommCategory commCat) {
        log.info("Request to create CommCategory: {}", commCat.toString());
        CommCategory result = commCatRepo.save(commCat);
        return ResponseEntity.ok().body(result);
    }
	
	@PutMapping("/crud")
    ResponseEntity<CommCategory> update(@RequestBody CommCategory commCat) {
        log.info("Request to update CommCategory: {}", commCat.toString());
        CommCategory result = commCatRepo.save(commCat);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/crud")
    public ResponseEntity<?> delete(@RequestBody CommCategory item) {
        log.info("Request to delete id: {}", item.getId());
        commCatRepo.deleteById(item.getId());
        return ResponseEntity.ok().body(item.getId());
    }
	
}
