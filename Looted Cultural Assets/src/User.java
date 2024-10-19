public class User {
    private String name;
    private String role;

    // Parameterized constructor
    public User(String name, String role) {
        this.name = name;
        this.role = role;
    }

    // Accessor methods
    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    // Mutator methods
    public void setName(String name) {
        this.name = name;
    }

    public void setRole(String role) {
        this.role = role;
    }

    // toString method
    @Override
    public String toString() {
        return "User [name=" + name + ", role=" + role + "]";
    }
}
