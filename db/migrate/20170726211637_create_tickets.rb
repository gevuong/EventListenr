class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :tickets, :event_id
    add_index :tickets, :user_id
  end
end
