package test;

import org.junit.jupiter.api.Test;
import java.lang.reflect.Method;
import static org.junit.jupiter.api.Assertions.*;

public class DatabaseTest {

    @Test
    void testGettersAndSetters() throws Exception {
        // Create an instance of the Database class using reflection
        Class<?> databaseClass = Class.forName("Database");
        Object database = databaseClass.getConstructor(String.class, String.class).newInstance("Artifacts Dataset", "CSV");

        // Test getter methods using reflection
        Method getDatasetName = databaseClass.getMethod("getDatasetName");
        Method getFormat = databaseClass.getMethod("getFormat");
        assertEquals("Artifacts Dataset", getDatasetName.invoke(database));
        assertEquals("CSV", getFormat.invoke(database));

        // Test setter methods using reflection
        Method setDatasetName = databaseClass.getMethod("setDatasetName", String.class);
        Method setFormat = databaseClass.getMethod("setFormat", String.class);
        setDatasetName.invoke(database, "Updated Dataset");
        setFormat.invoke(database, "JSON");
        assertEquals("Updated Dataset", getDatasetName.invoke(database));
        assertEquals("JSON", getFormat.invoke(database));
    }

    @Test
    void testToString() throws Exception {
        // Create an instance of the Database class using reflection
        Class<?> databaseClass = Class.forName("Database");
        Object database = databaseClass.getConstructor(String.class, String.class).newInstance("Artifacts Dataset", "CSV");

        // Test toString method using reflection
        Method toStringMethod = databaseClass.getMethod("toString");
        String expected = "Database [datasetName=Artifacts Dataset, format=CSV]";
        assertEquals(expected, toStringMethod.invoke(database));
    }
}
