package ay.elmehdi.todoapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String description;
    private boolean completed;
    private boolean deleted;

    public Todo(String title, String description, boolean completed, boolean deleted) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.deleted = deleted;
    }
}
