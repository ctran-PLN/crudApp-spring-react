package backend.repository;

import org.springframework.data.repository.CrudRepository;

import backend.model.CommCategory;

public interface CommCatRepo extends CrudRepository<CommCategory, Integer> {

}
