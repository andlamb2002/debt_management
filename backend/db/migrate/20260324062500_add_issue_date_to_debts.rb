class AddIssueDateToDebts < ActiveRecord::Migration[8.1]
  def change
    add_column :debts, :issue_date, :date
  end
end
