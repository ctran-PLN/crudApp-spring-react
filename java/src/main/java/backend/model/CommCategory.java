package backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "communication_category")
public class CommCategory {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

	private String campaign;

    private String message_type;
    
    private String message_language;

    private String subject;

    private String category;

	private String rename_this_table;
    
    public CommCategory() {}
    
    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCampaign() {
		return campaign;
	}

	public void setCampaign(String campaign) {
		this.campaign = campaign;
	}

	public String getMessage_type() {
		return message_type;
	}

	public void setMessage_type(String message_type) {
		this.message_type = message_type;
	}

	public String getMessage_language() {
		return message_language;
	}

	public void setMessage_language(String message_language) {
		this.message_language = message_language;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getRename_this_table() {
		return rename_this_table;
	}

	public void setRename_this_table(String rename_this_table) {
		this.rename_this_table = rename_this_table;
	}
	
	@Override
	public String toString() {
		return "CommCategory [id=" + id + ", campaign=" + campaign + ", message_type=" + message_type
				+ ", message_language=" + message_language + ", subject=" + subject + ", category=" + category
				+ ", rename_this_table=" + rename_this_table + "]";
	}


}
